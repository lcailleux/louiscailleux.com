# cms/views.py
from rest_framework import viewsets
from .models import Block
from .serializers import BlockSerializer


class BlockReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Block.objects.all()
    serializer_class = BlockSerializer
