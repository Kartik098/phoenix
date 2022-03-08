from django.template.defaulttags import url
from django.urls import path, re_path
from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from .views import CompanyView
from .views import UserViewSet, CompanyViewSet, GetCSRFToken

router = routers.DefaultRouter()
router.register('users', UserViewSet)

router.register('companys', CompanyViewSet, basename='companys')
router.register('', CompanyViewSet, basename='companys')
urlpatterns = router.urls

urlpatterns += [
    path('csrf_cookie', GetCSRFToken.as_view()),
    path("api-auth/", include("rest_framework.urls")),


]
react_views_regex = r'\/|\b'.join([

    # List all your react routes here
    'CompanyViewSet',
    'add-new-site'

]) + r'\/'

urlpatterns = [
    # Change views.index to whatever your view is
    re_path(react_views_regex, CompanyView.as_view()),


]
