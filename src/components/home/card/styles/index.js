import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	padding: 16px;
	width: 80%;
	height: 100%;
	background: ${(props) => props.theme.color.bgLight};
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	margin: 0 auto 16px auto;
	&:last-of-type {
		margin-bottom: 0px;
	}
	@media (max-width: 640px) {
		flex-direction: column;
	}
`;
export const ImageContainer = styled.div`
	order: ${(props) => (props.children.props.isEven ? 0 : 1)};
	flex: 35%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	& svg {
		height: auto;
		width: 90%;
	}
	@media (max-width: 640px) {
		order: 0;
		max-height: 200px;
		margin-bottom: 8px;
		align-items: flex-end;
		& svg {
			width: 100px;
		}
	}
`;
export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 65%;
`;

export const Title = styled.h3`
	${(props) => props.theme.text.h3};
	color: #f5af19;
	cursor: pointer;
	margin-bottom: 16px;
`;

export const Description = styled.p`
	${(props) => props.theme.text.body};
	color: ${(props) => props.theme.color.accent};
	margin-bottom: 16px;
`;
export const List = styled.ul`
	${(props) => props.theme.text.body}
	color: ${(props) => props.theme.color.accent};
	margin-bottom: 8px;
	list-style-type: none;
`;
export const ListItem = styled.li`
	${(props) => props.theme.text.button}
	padding: 16px;
	color: #f5af19;
	cursor: pointer;
	width: fit-content;
`;
