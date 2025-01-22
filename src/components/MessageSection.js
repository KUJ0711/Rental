// components/MessageSection.js

import { useEffect } from 'react';
import './MessageSection.css';

const MessageSection = () => {
  useEffect(() => {
    const section = document.getElementById('message-section-unique');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px'  }
    );

    observer.observe(section);

    return () => {
      if (section) { observer.unobserve(section); }
    };
  }, []);

  return (
    <section id="message-section-unique" className="message-section">
      <h2 className="message-title">Message</h2>
      <p className="message-content">
        &nbsp;안녕하세요, <b>&quot;브링 더 매직&quot;</b>에 오신 것을 환영합니다. <br/><br/><br/>

        &nbsp; 처음 방송을 하는 스트리머들은
        재능과 열정이 넘치는데도 불구하고 그것을 <b>충분히 보여주지 못하는</b> 경우가 많습니다. <br/>
        여러 이유가 있겠지만 <b> 장비의 부족</b>과 <b> 컴퓨터 프로그램 세팅</b>이 그 이유라면 얼마나 억울할까요? <br/><br/><br/>

        &nbsp;사실 스트리머가 되기 위해선 그저 <b>&#039;방송 시작&#039;</b> 버튼만 누르면 됩니다. <br/>
        그러나 많은 분들이 <b>초기 비용</b>과 <b>복잡한 세팅</b> 때문에 그 버튼을 누르기 전에 포기하곤 합니다. <br/>
        저 역시 처음에는 다양한 어려움을 겪었고, <b>며칠 동안 검색하고 배우면서</b> 방송 환경을 세팅할 수 있었습니다. <br/><br/><br/>

        &nbsp;브링 더 매직의 <b>목표</b>는 <b>여러분이 오직 방송 시작 버튼만 누르면 되는 환경을 제공하는 것</b>입니다. <br/>
        부담스러운 장비들과 프로그램 세팅은
        모두 <b>브링 더 매직</b>이 도와드리겠습니다. <br/><br/><br/>

        &nbsp; 여러분만의 <b> 특별한 이야기와 목소리</b>를 이제 세상이 들을 수 있도록 해주세요. <br/>
        여러분은 그저 <b>자신만의 마법을</b> 가져오시기만 하면 됩니다.<br/>
        망설이지 말고, <b>브링 더 매직</b>과 함께 하세요.
      </p>
    </section>
  );
};

export default MessageSection;
