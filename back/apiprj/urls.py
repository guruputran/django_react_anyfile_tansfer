from django.contrib import admin
from django.urls import path, include

from uploadme.views import BookViewSet
from django.conf.urls.static import static
from django.conf import settings

from rest_framework import permissions, routers
from drf_yasg.views import get_schema_view # new
from drf_yasg import openapi

router = routers.DefaultRouter()
router.register('books', BookViewSet)

schema_view = get_schema_view(
    openapi.Info(
    title="Blog API",
    default_version='v1',
    description="A sample API for learning DRF",
    terms_of_service="https://www.google.com/policies/terms/",
    contact=openapi.Contact(email="hello@example.com"),
    license=openapi.License(name="BSD License"),
    ),
public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('books.urls')), 
    path('api/', include('api.urls')),
    path('apitodos/', include('todos.urls')),
    path('api/v1/', include('posts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('swagger/', schema_view.with_ui(
    'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui(
    'redoc', cache_timeout=0), name='schema-redoc'),
    path('', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)