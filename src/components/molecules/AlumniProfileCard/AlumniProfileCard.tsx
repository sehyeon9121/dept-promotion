import { ProfileImage } from '@/components/molecules/ProfileImage';
import { cn } from '@/utils/cn';

export interface AlumniProfileCardProps {
  image: string;
  name: string;
  imageSize?: number;
  cardWidth?: number;
  padding?: number;
  className?: string;
}

export function AlumniProfileCard({
  image,
  name,
  imageSize = 192,
  cardWidth = 216,
  padding = 12,
  className,
}: AlumniProfileCardProps) {
  return (
    <div
      className={cn('bg-white text-center', className)}
      style={{
        width: cardWidth,
        paddingTop: padding + 3,
        paddingBottom: padding + 3,
        paddingLeft: padding,
        paddingRight: padding,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        borderBottom: '1px solid #797C8D',
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <ProfileImage
          src={image}
          alt={name}
          size="md"
          shape="square"
          className="object-cover"
          style={{ width: imageSize, height: imageSize }}
        />
      </div>

      <p className="text-[18px] font-medium text-black">
        {name}
      </p>
    </div>
  );
}
