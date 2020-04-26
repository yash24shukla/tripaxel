from django.urls import path
from . import views
urlpatterns = [
    path('Qdetail/<str:pk>/', views.Qdetails, name="Qdetail"),
	path('Qcreate/', views.Qcreate, name="Qcreate"),
    path('Qlist/', views.QList, name="Qlist"),
	path('Qupdate/<str:pk>/', views.Qupdate, name="Qupdate"),
	path('Qdelete/<str:pk>/', views.Qdelete, name="Qdelete"),
]