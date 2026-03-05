// components/admin/AdministratorCard.tsx
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  item: any;
  key:number;
  handleCardClick:()=>any;
}

const AdministratorCard: React.FC<Props> = ({ item,key,handleCardClick }) => {
  return (
    
  );
};

export default AdministratorCard;