import '../App.css';
import {Link} from "react-router-dom";


const Intro = () => {
  return (
    <div className="w-full min-h-full bg-white flex-col justify-start items-start overflow-hidden">
      <div
        className="w-full h-[900px] self-stretch grow shrink basis-0 pl-[100px] bg-black flex-col justify-center items-start gap-[50px] flex overflow-hidden">
        <div className="justify-start items-center gap-[150px] inline-flex">
          <div className="flex-col justify-start items-start inline-flex">
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-white text-5xl font-semibold font-['Inter'] leading-[80px]">저는 기획자</div>
              <div className="justify-start items-start flex">
                <div className="text-white text-[64px] font-semibold font-['Inter'] underline leading-[90px]">이혁</div>
                <div className="text-white text-5xl font-semibold font-['Inter'] leading-[80px]">이라고 합니다.</div>
              </div>
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="text-white text-[64px] font-semibold font-['Inter'] underline leading-[90px]">연말정산모임</div>
              <div className="text-white text-5xl font-semibold font-['Inter'] leading-[80px]">에 오신 여러분 환영합니다.</div>
            </div>
          </div>
        </div>
        <div className="text-[#bdbdbd] text-base font-semibold font-['Inter']">H E L L O,</div>
      </div>
      <div
        className="self-stretch h-[900px] px-[150px] bg-white flex-col justify-center items-start flex overflow-hidden">
        <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex overflow-hidden">
          <div className="w-[156px] self-stretch py-[511px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="self-stretch text-black text-5xl font-semibold font-['Inter'] pb-36">About.</div>
          </div>
          <div className="self-stretch flex-col justify-center items-start gap-5 inline-flex">
            <div className="self-stretch text-[#424242] text-base font-light font-['Inter']">2024년 마지막 순간!</div>
            <div className="text-black text-2xl font-medium font-['Inter']">짜잔~!
              서프라이즈<br/>벌써 2024년의 마지막이 다가왔어!<br/>당장 하루도 남지 않은 새해
              <br/>어떤 마음으로 맞이할거얌??
              <br/>이젠 공부해야겠다는 생각? 미래를 위한 준비?
              <br/>근데 일단 이런 생각은 잠깐 내려놓고 2024년의 마지막 날을
              <br/>즐기쟈~~
            </div>
            <div className="self-stretch pt-5 justify-end items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-right text-black text-base font-normal font-['Inter']">- 기획자의
                한마디
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch h-[900px] px-[150px] bg-white flex-col justify-start items-start flex overflow-hidden">
        <div className="self-stretch grow shrink basis-0 justify-between items-center inline-flex overflow-hidden">
          <div className="w-[156px] h-[1080px] justify-center items-center gap-2.5 flex">
            <div className="text-black text-5xl font-semibold font-['Inter']">Who.</div>
          </div>
          <div className="self-stretch flex-col justify-center items-start gap-[187px] inline-flex">
            <div className="flex-col justify-center items-start gap-[50px] flex">
              <div className="self-stretch text-[#303030] text-base font-light font-['Inter']">내가 누구나고?</div>
              <div className="text-black text-2xl font-medium font-['Inter']">나는 그냥 일개 학생일 뿐인 사람이다만 ㅎ;;<br/>에잇! 구게 머가중요해<br/>그냥
                너희랑 2024년 마지막을 같이 보내고 싶은 사람이라 생각해줘여!<br/><br/>그럼 이제 놀러 가보쟈!
              </div>
              <div className="self-stretch pt-5 justify-start items-center gap-10 inline-flex">
                <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                  <div className="text-[#767676] text-xs font-normal font-['Inter']">아래 텍스트를 클릭해주세요</div>
                  <Link
                    className="text-black text-2xl font-normal font-['Inter'] underline"
                    to="/2024-year-end/"
                  >
                    놀러가기
                  </Link>
                </div>
                <div className="w-32 h-32 animal-img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;