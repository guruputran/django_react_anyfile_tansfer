from django.contrib import admin
from .models import Book

# admin.site.register(Book)

#https://stackoverflow.com/questions/10543032/how-to-show-all-fields-of-model-in-admin-page
@admin.register(Book)
class UploadmeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Book._meta.fields if field.name not in ('id', 'qual_key', 'qual_desc')]
    list_display.insert(0, '__str__')