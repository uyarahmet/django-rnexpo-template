from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from django.shortcuts import render
from django.contrib.auth import views as auth_views
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
router.register('users', UserViewSet, basename='User')

urlpatterns = [
    url('token/', csrf_exempt(TokenObtainPairView.as_view())),  # would be better to find an alternative
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path("password_reset/", password_reset_request, name="password_reset"),
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='main/password/password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="main/password/password_reset_confirm.html"), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='main/password/password_reset_complete.html'), name='password_reset_complete'),
]
