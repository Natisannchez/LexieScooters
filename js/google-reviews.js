document.addEventListener('DOMContentLoaded', function() {
    const reviewsContainer = document.getElementById('google-reviews-container');
    const placeId = 'ChIJVVVVVVVVV'; // Reemplazar con tu Place ID real
    
    // Intento de cargar reseñas reales
    if (typeof google !== 'undefined') {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        
        service.getDetails({
            placeId: placeId,
            fields: ['reviews', 'rating', 'user_ratings_total']
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                reviewsContainer.innerHTML = '';
                
                // Mostrar reseñas
                place.reviews.slice(0, 6).forEach(review => {
                    const reviewCard = document.createElement('article');
                    reviewCard.className = 'review-card';
                    reviewCard.innerHTML = `
                        <div class="review-header">
                            <img src="${review.profile_photo_url || '../assets/img/users/default.jpg'}" 
                                 alt="${review.author_name}" 
                                 class="user-avatar">
                            <div class="user-info">
                                <h3>${review.author_name}</h3>
                                <div class="stars">
                                    ${'<i class="fas fa-star"></i>'.repeat(Math.floor(review.rating))}
                                    ${review.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
                                </div>
                            </div>
                            <span class="review-date">${new Date(review.time * 1000).toLocaleDateString()}</span>
                        </div>
                        <div class="review-content">
                            <p>"${review.text}"</p>
                        </div>
                        <div class="review-footer">
                            <span class="verified"><i class="fab fa-google"></i> Reseña de Google</span>
                        </div>
                    `;
                    reviewsContainer.appendChild(reviewCard);
                });
            } else {
                showFeaturedReviews();
            }
        });
    } else {
        showFeaturedReviews();
    }
    
    function showFeaturedReviews() {
        document.querySelector('.featured-reviews').style.display = 'grid';
        reviewsContainer.innerHTML = '<p class="api-error">No pudimos cargar las reseñas en vivo. Mostrando reseñas destacadas.</p>';
    }
});