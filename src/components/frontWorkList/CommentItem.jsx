import styled from "styled-components";
import UserIcon from "../../assets/people.png";
import LikeIcon from "../../assets/heart.png";

const CommentItem = ({ item }) => {
    return (
        <Wrapper>
            <Name>
                <Icon src={UserIcon} alt="작성자" /> {item.user}
            </Name>
            <Content>{item.content}</Content>
            <Container>
                <Date>{item.date}</Date>
                <Like>
                    <Icon src={LikeIcon} alt="추천" /> {item.like}
                </Like>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: transparent;
    border-color: #868686 transparent;
    border-style: solid;
    border-width: 1px 0;
    padding: 17px;

    &:not(:first-child) {
        margin-top: -1px; // 첫 번째 div는 마진을 설정 안함
    }
`;

const Name = styled.div`
    display: flex;
    align-items: center; 
`;

const Content = styled.div`
    padding: 14px 24px 7px;
`;

const Date = styled.div`
    padding: 7px 24px;
`;

const Like = styled.div`
    display: flex;
    align-items: center; 
    background-color: #3F424E;
    border-radius: 6px;
    padding: 8px;
`;

const Icon = styled.img`
    margin-right: 8px; 
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default CommentItem;