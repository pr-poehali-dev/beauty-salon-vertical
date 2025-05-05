
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays } from 'lucide-react';

interface MasterCardProps {
  id: string;
  name: string;
  position: string;
  experience: number;
  image: string;
  description: string;
  specialties: string[];
}

const MasterCard = ({
  id,
  name,
  position,
  experience,
  image,
  description,
  specialties
}: MasterCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-primary font-medium">{position}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {specialties.map((specialty, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {specialty}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-gray-600">
          <span className="font-medium">Опыт работы:</span> {experience} {experience > 4 ? 'лет' : experience > 1 ? 'года' : 'год'}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <CalendarDays size={16} />
          Записаться
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MasterCard;
