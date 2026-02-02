import "../styles/Footer.css";

function Footer() {
  // 1. 현재 연도 자동 계산
  // 매번 코드를 수정하지 않아도 해가 바뀌면 알아서 2026, 2027로 바뀝니다.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        {/* 저작권 표시 */}
        <p>© {currentYear} My Memo App. All rights reserved.</p>
        
        <div className="footer-links">
          {/* 2. 외부 링크 보안 설정 (중요!)
             target="_blank": 새 탭에서 열기
             rel="noopener noreferrer": 새 탭에서 열린 페이지가 
             현재 페이지의 정보를 참조하거나 조작하지 못하게 막는 보안 속성
          */}
          <a 
            href="https://github.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub 방문하기 ↗
          </a>
        </div>
        
        {/* 기술 스택 표시 (포트폴리오용) */}
        <p className="tech-stack">Built with React & TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;