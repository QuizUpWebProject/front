import { useNavigate } from "react-router-dom";

export default function JoinForm() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div>
          아이디<span>*</span>
        </div>
        <input />
        <button>중복 확인</button>
      </div>

      <div>
        <div>
          비밀번호<span>*</span>
        </div>
        <input />
        <input />
      </div>

      <div>
        <div>
          닉네임<span>*</span>
        </div>
        <input />
        <button>중복 확인</button>
      </div>

      <button onClick={() => navigate("/joinend")}>가입완료</button>
    </>
  );
}
