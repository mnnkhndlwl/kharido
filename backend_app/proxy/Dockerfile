# Use the official Nginx image as the base image
FROM nginx

# Remove the default nginx.conf from the base image
RUN rm /etc/nginx/nginx.conf

# Copy your custom nginx.conf to the container
COPY nginx.conf /etc/nginx/nginx.conf
