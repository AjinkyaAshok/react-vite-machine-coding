import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Infinite() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();

  async function fetchPhotos(pageNumber) {
    setLoading(true);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
    );

    const data = await response.json();

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setPhotos((prev) => [...prev, ...data]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPhotos(page);
  }, [page]);

  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return (
    <div>
      {photos.map((item, index) => {
        if (index === photos.length - 1) {
          return (
            <div
              key={item.id}
              ref={lastElementRef}
              style={{
                margin: "20px",
                padding: "20px",
                border: "1px solid black",
              }}
            >
              <h2>{item.title}</h2>
            </div>
          );
        }

        return (
          <div
            key={item.id}
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid black",
            }}
          >
            <h2>{item.title}</h2>
          </div>
        );
      })}

      {loading && <h2>Loading...</h2>}
    </div>
  );
}