import { motion } from 'framer-motion';
import { MapPin, Mail, User } from 'lucide-react';
import type { FacultyMember } from '@/types';

export interface FacultyCardProps {
  member: FacultyMember;
  index?: number;
  className?: string;
}

function InfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-2.5 text-sm leading-relaxed">
      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
      <span className="text-slate-400 min-w-[56px] flex-shrink-0">{label}</span>
      <span className="text-slate-800 flex items-center gap-1.5">
        {value}
        {icon}
      </span>
    </div>
  );
}

export function FacultyCard({ member, index = 0, className }: FacultyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className={className}
    >
      {/* 상단 헤더 영역 */}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3 flex-wrap">
          {/* 프로필 이미지 */}
          <div className="w-20 h-20 rounded overflow-hidden bg-slate-100 flex-shrink-0 flex items-center justify-center">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={36} className="text-slate-400" />
            )}
          </div>
          <span className="text-lg font-bold text-slate-900">{member.name}</span>
          <span className="text-sm text-slate-500">{member.nameEn}</span>
          <span className="text-slate-300 text-sm">|</span>
          <span className="text-sm text-slate-600">{member.role}</span>
        </div>
        <button className="px-3.5 py-1.5 text-xs text-slate-500 bg-gray-100 rounded hover:bg-gray-200 transition-colors flex-shrink-0 ml-4">
          더보기 &gt;
        </button>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-100" />

      {/* 하단 상세 정보 영역 (2단 그리드) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2.5 py-5">
        {/* 왼쪽 열 */}
        <div className="space-y-2.5">
          <InfoItem label="전공" value={member.major} />
          <InfoItem label="최종학력" value={member.degree} />
          <InfoItem
            label="연구실"
            value={member.lab}
            icon={<MapPin size={13} className="text-slate-400" />}
          />
        </div>

        {/* 오른쪽 열 */}
        <div className="space-y-2.5">
          <InfoItem label="전화번호" value={member.phone} />
          <InfoItem
            label="이메일"
            value={member.email}
            icon={<Mail size={13} className="text-slate-400" />}
          />
        </div>
      </div>

      {/* 하단 구분선 */}
      <div className="w-full h-px bg-gray-200" />
    </motion.article>
  );
}
