function MovieCard({ title, year, rating, available, popular, genre, duration}) {
  return (
    <article className="movie-card">
      <h2>{title}</h2>
      <p>שנת יציאה: {year}</p>
      <p>דירוג: {rating}</p>
      {available &&<p>זמין לצפייה</p>}
      {popular &&<p>בחירת הצוות</p>}
      <p>ז׳אנר: {genre}</p>
      {duration > 80 && <p>אורך הסרט: {duration} דקות</p>}
    </article>
  );
}
export default MovieCard;