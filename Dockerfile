FROM mysql:8.0
ENTRYPOINT ["init.sql"]
EXPOSE 80
