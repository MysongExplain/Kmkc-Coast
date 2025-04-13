export default function Upload() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Song Explanation</h2>
      <form>
        <div>
          <label>Song Title:</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Explanation:</label>
          <textarea name="explanation" rows="5" />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
} 