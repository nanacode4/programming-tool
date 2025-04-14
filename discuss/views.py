from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .models import Discuss, Reply

def get_discussions_with_replies(request):
    data = []

    for d in Discuss.objects.all().order_by('-time'):
        replies = Reply.objects.filter(discuss=d).values(
            'replier', 'content', 'time'
        )

        data.append({
            'id': d.id,
            'title': d.title,
            'description': d.description,
            'tags': d.tags,
            'likes': d.likes,
            'time': d.time,
            'username': d.username,
            'replies': list(replies),
        })

    return JsonResponse(data, safe=False)


@csrf_exempt
def add_reply(request, discuss_id):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            replier = data.get('replier')
            content = data.get('content')

            if not replier or not content:
                return JsonResponse({'error': 'Missing fields'}, status=400)

            discuss = Discuss.objects.get(id=discuss_id)
            Reply.objects.create(discuss=discuss, replier=replier, content=content)
            return JsonResponse({'message': 'Reply added successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def create_discussion(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            description = data.get('description')
            tags = data.get('tags', [])
            username = data.get('username', 'Anonymous')

            if not title or not description:
                return JsonResponse({'error': 'Missing title or description'}, status=400)

            new_discuss = Discuss.objects.create(
                title=title,
                description=description,
                tags=tags,
                username=username
            )

            return JsonResponse({'message': 'Question posted', 'id': new_discuss.id})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)