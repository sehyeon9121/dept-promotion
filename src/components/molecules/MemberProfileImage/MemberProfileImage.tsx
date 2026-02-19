import { ProfileImage } from '@/components/molecules/ProfileImage';
import { SocialIcon } from '@/components/molecules/SocialIcon';
import { cn } from '@/utils/cn';

export interface MemberProfileImageProps {
  image: string;
  name: string;
  scholarUrl?: string;
  email?: string;
  size?: number;
  className?: string;
}

export function MemberProfileImage({
  image,
  name,
  scholarUrl,
  email,
  size = 222,
  className,
}: MemberProfileImageProps) {
  return (
    <div className={cn('flex-shrink-0', className)}>
      <ProfileImage
        src={image}
        alt={name}
        size="xl"
        shape="square"
        className="object-cover"
        style={{ width: size, height: size }}
      />
      {(scholarUrl || email) && (
        <div className="flex items-center justify-center gap-2" style={{ marginTop: 16 }}>
          {scholarUrl && (
            <SocialIcon
              platform="google"
              href={scholarUrl}
              size={30}
              strokeWidth={1.5}
              className="text-gray-500 hover:text-[#00380A] transition-colors"
            />
          )}
          {email && (
            <SocialIcon
              platform="email"
              href={`mailto:${email}`}
              size={30}
              strokeWidth={1.5}
              className="text-gray-500 hover:text-[#00380A] transition-colors"
            />
          )}
        </div>
      )}
    </div>
  );
}
