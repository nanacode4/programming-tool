# Generated by Django 4.2.19 on 2025-04-14 11:06

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Discuss',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('tags', models.JSONField(default=list)),
                ('likes', models.IntegerField(default=0)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('username', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('replier', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('discuss', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='replies', to='discuss.discuss')),
            ],
        ),
    ]
