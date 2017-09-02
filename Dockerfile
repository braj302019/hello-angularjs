FROM nginx
COPY src/main/webapp/ /usr/share/nginx/html
RUN echo "Copied src/main/webapp folder"
RUN rm -f /usr/share/nginx/html/js
RUN echo "Deleted src/main/webapp/js folder back"
EXPOSE 80
