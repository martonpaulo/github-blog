interface StateBoxProps {
  loading?: boolean;
  error?: string | null;
  data: unknown;
}

export function StateBox({ loading, error, data }: StateBoxProps) {
  const dataNotFound = !loading && !error && !data;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  if (dataNotFound) {
    return <p>No data found.</p>;
  }

  return null;
}
