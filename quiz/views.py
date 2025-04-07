from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import QuizIndex, MultipleChoiceQuestion, FillInBlankQuestion, DragDropQuestion
from .serializers import (
    QuizIndexSerializer,
    MultipleChoiceSerializer,
    FillInBlankSerializer,
    DragDropSerializer,
)


@api_view(['GET'])
def all_quiz_questions(request):
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
