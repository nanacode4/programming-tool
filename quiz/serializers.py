from rest_framework import serializers
from .models import (
    QuizIndex,
    MultipleChoiceQuestion,
    FillInBlankQuestion,
    DragDropQuestion,
)


class MultipleChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MultipleChoiceQuestion
        fields = ['id', 'category', 'question', 'answer', 'options']


class FillInBlankSerializer(serializers.ModelSerializer):
    class Meta:
        model = FillInBlankQuestion
        fields = ['id', 'category', 'question', 'answer', 'code_parts']


class DragDropSerializer(serializers.ModelSerializer):
    class Meta:
        model = DragDropQuestion
        fields = ['id', 'category', 'question', 'code_parts', 'answer', 'options']


class QuizIndexSerializer(serializers.ModelSerializer):
    data = serializers.SerializerMethodField()

    class Meta:
        model = QuizIndex
        fields = ['id', 'kind', 'ref_id', 'data']

    def get_data(self, obj):
        if obj.kind == 'multiple':
            question = MultipleChoiceQuestion.objects.get(id=obj.ref_id)
            return MultipleChoiceSerializer(question).data
        elif obj.kind == 'fill':
            question = FillInBlankQuestion.objects.get(id=obj.ref_id)
            return FillInBlankSerializer(question).data
        elif obj.kind == 'drag':
            question = DragDropQuestion.objects.get(id=obj.ref_id)
            return DragDropSerializer(question).data
        return None
