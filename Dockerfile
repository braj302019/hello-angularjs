FROM nginx
# run bower, npm and gulp before coping static resources from host to docker container
#RUN bower install
#RUN npm install
#RUN gulp
COPY src/main/webapp/ /usr/share/nginx/html
RUN echo "Copied src/main/webapp folder"
EXPOSE 80

# how to run
# sudo docker run -p 8080:80 -d <image_name>
# hit http://localhost:8080 in browswer
