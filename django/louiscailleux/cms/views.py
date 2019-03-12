# cms/views.py
from rest_framework import generics
from .models import Block
from .serializers import BlockSerializer


class BlockApiView(generics.ListAPIView):
    queryset = Block.objects.all()
    serializer_class = BlockSerializer

    def get_queryset(self):
        queryset = Block.objects.all()
        identifier = self.request.query_params.get('identifier', None)
        language = self.request.query_params.get('language', None)
        if identifier:
            queryset = queryset.filter(identifier=identifier)
        if language:
            queryset = queryset.filter(language_code=language)

        return queryset
