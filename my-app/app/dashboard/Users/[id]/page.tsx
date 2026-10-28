import { Suspense } from "react";

async function UserDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>Userdetails for {id}</div>;
}

export default function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserDetails params={params} />
    </Suspense>
  );
}
