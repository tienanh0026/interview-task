import { Button } from "@/components/ui/button";
import CoinDetail from "@/features/coins/screens/CoinDetail";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router";

export default function CoinDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) return null;

  return (
    <div className="container mx-auto mt-10">
      <Button
        variant="ghost"
        className="hover:underline"
        onClick={() => navigate("/")}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Coins
      </Button>

      <CoinDetail id={id} />
    </div>
  );
}
