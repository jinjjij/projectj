import Link from "next/link";

export default function Home() {
  return (
    <main className="hero">
      <section className="intro">
        <h1>안녕하세요, 진 윤입니다 👋</h1>
        <p>
          게임/웹을 좋아하는 개발자입니다. 아래 서비스에서 작업과 기록을 정리하고 있어요.
        </p>
      </section>

      <section className="grid">
        <ServiceCard
          title="로그인"
          desc="로그인 페이지"
          href="/login"
        />
        <ServiceCard
          title="포트폴리오"
          desc="프로젝트, 기술스택, 이력 요약"
          href="/portfolio"
        />
        <ServiceCard
          title="문제은행"
          desc="QBank: 학습용 문제 생성/풀이"
          href="/qbank"
        />
        <ServiceCard
          title="일정관리"
          desc="간단 일정/할일 관리"
          href="/schedule"
        />
        <ServiceCard
          title="개발 블로그"
          desc="개발공부의 기록입니다"
          href="/devlog"
        />
      </section>
    </main>
  );
}


function ServiceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link href={href} className="card">
      <h3>{title} →</h3>
      <p>{desc}</p>
    </Link>
  );
}