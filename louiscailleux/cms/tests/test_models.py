from django.test import TestCase
from ..models import Block


class BlockTest(TestCase):
    def setUp(self):
        Block.objects.create(
            title='Test Block 1',
            show_title=True,
            identifier='test_block_1',
            content='Content block 1',
            language_code='en',
            is_active=True
        )
        Block.objects.create(
            title='Test Block 2',
            show_title=False,
            identifier='test_block_2',
            content='Content block 2',
            language_code='fr',
            is_active=True
        )

    def test_block_title(self):
        test_block_1 = Block.objects.get(identifier='test_block_1')
        test_block_2 = Block.objects.get(identifier='test_block_2')
        self.assertEqual(test_block_1.get_title(), "Test Block 1")
        self.assertEqual(test_block_2.get_title(), "Test Block 2")
