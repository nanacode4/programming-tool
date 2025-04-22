from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import QuizIndex, MultipleChoiceQuestion, FillInBlankQuestion, DragDropQuestion
from .serializers import (
    QuizIndexSerializer,
    MultipleChoiceSerializer,
    FillInBlankSerializer,
    DragDropSerializer,
)
from rest_framework import status
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

@api_view(['GET', 'POST'])
def all_quiz_questions(request):
    if request.method == 'GET':
        quiz_items = QuizIndex.objects.all()
        result = []

        for index in quiz_items:
            data = {
                "id": index.id,
                "kind": index.kind,
                "ref_id": index.ref_id,
            }

            if index.kind == 'multiple':
                instance = MultipleChoiceQuestion.objects.get(id=index.ref_id)
                data["data"] = MultipleChoiceSerializer(instance).data
            elif index.kind == 'fill':
                instance = FillInBlankQuestion.objects.get(id=index.ref_id)
                data["data"] = FillInBlankSerializer(instance).data
            elif index.kind == 'drag':
                instance = DragDropQuestion.objects.get(id=index.ref_id)
                data["data"] = DragDropSerializer(instance).data
            else:
                data["data"] = None

            result.append(data)

        return Response(result)

    elif request.method == 'POST':
        kind = request.data.get("kind")
        data = request.data.get("data")

        if kind == 'multiple':
            serializer = MultipleChoiceSerializer(data=data)
        elif kind == 'fill':
            serializer = FillInBlankSerializer(data=data)
        elif kind == 'drag':
            serializer = DragDropSerializer(data=data)
        else:
            return Response({'error': 'Invalid kind type'}, status=status.HTTP_400_BAD_REQUEST)

        if serializer.is_valid():
            question = serializer.save()
            index = QuizIndex.objects.create(kind=kind, ref_id=question.id)

            return Response({
                'id': index.id,
                'kind': kind,
                'ref_id': question.id,
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET', 'PUT', 'DELETE'])
def quiz_detail(request, pk):
    index = get_object_or_404(QuizIndex, pk=pk)

    # Get specific topic examples
    if index.kind == 'multiple':
        model = MultipleChoiceQuestion
        serializer_class = MultipleChoiceSerializer
    elif index.kind == 'fill':
        model = FillInBlankQuestion
        serializer_class = FillInBlankSerializer
    elif index.kind == 'drag':
        model = DragDropQuestion
        serializer_class = DragDropSerializer
    else:
        return Response({'error': 'Invalid quiz kind'}, status=status.HTTP_400_BAD_REQUEST)

    instance = get_object_or_404(model, id=index.ref_id)

    # === GET ===
    if request.method == 'GET':
        data = {
            'id': index.id,
            'kind': index.kind,
            'ref_id': index.ref_id,
            'data': serializer_class(instance).data
        }
        return Response(data)

    # === PUT ===
    elif request.method == 'PUT':
        serializer = serializer_class(instance, data=request.data.get('data'), partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'id': index.id,
                'kind': index.kind,
                'ref_id': index.ref_id,
                'data': serializer.data
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # === DELETE ===
    elif request.method == 'DELETE':
        instance.delete()
        index.delete()
        return Response({'message': 'Quiz deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)
