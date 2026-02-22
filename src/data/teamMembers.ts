/**
 * 팀원 데이터 로더
 * /content/team/ 폴더의 YAML 파일들을 로드합니다.
 */

import type { TeamMember, FacultyMember } from '@/types';

// YAML 파일 import
import teamData from '@content/team/team.yaml';
import alumniData from '@content/team/alumni.yaml';

// YAML에서 로드된 데이터의 raw 타입 (alumni용)
interface RawTeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  scholar_url?: string;
  email: string;
  affiliation?: {
    en: string;
    ko: string;
  };
}

// YAML에서 로드된 교수진 raw 타입
interface RawFacultyMember {
  name: string;
  nameEn: string;
  role: string;
  image?: string;
  major: string;
  degree: string;
  lab: string;
  phone: string;
  email: string;
}

// Base URL for static assets
const BASE_URL = import.meta.env.BASE_URL || '/';

// Raw 데이터를 TeamMember 타입으로 변환 (alumni용)
function transformTeamMembers(raw: RawTeamMember[], type: 'team' | 'alumni'): TeamMember[] {
  return raw.map((member) => ({
    id: member.id,
    name: member.name,
    position: member.position,
    bio: member.bio,
    image: member.image ? `${BASE_URL}content/team/${member.image}` : '',
    scholarUrl: member.scholar_url,
    email: member.email,
    type,
    affiliation: member.affiliation,
  }));
}

// Raw 데이터를 FacultyMember 타입으로 변환
function transformFacultyMembers(raw: RawFacultyMember[]): FacultyMember[] {
  return raw.map((member) => ({
    name: member.name,
    nameEn: member.nameEn,
    role: member.role,
    image: member.image ? `${BASE_URL}content/team/${member.image}` : '',
    major: member.major,
    degree: member.degree,
    lab: member.lab,
    phone: member.phone,
    email: member.email,
  }));
}

// 교수진 목록
export const facultyMembers: FacultyMember[] = transformFacultyMembers(
  teamData as RawFacultyMember[]
);

// 현재 팀원 목록 (하위 호환용)
export const teamMembers: TeamMember[] = [];

// 동문 목록
export const alumni: TeamMember[] = transformTeamMembers(
  alumniData as RawTeamMember[],
  'alumni'
);

// 전체 멤버 (팀원 + 동문)
export const allMembers: TeamMember[] = [...teamMembers, ...alumni];
