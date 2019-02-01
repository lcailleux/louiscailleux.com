# cms/views.py
from rest_framework import viewsets, mixins
from .models import Block
from .serializers import BlockSerializer


class BlockIdentifierDetailViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    lookup_field = 'identifier'
    queryset = Block.objects.all()
    serializer_class = BlockSerializer


class BlockReadOnlyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Block.objects.all()
    serializer_class = BlockSerializer
