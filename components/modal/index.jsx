import React from "react";
import useAuth from "../../src/hooks/auth";
import { Button, ButtonContainer, Modal, Wrapper } from "./styles";
import { Title } from "../profile/card/styles";
import { format } from "date-fns";
import { FirestoreService } from "../../src/service/firestoreService";
import { useRouter } from "next/router";

const DeleteModal = ({ data, setOpenModal }) => {
	const { user } = useAuth();
	const router = useRouter();
	console.log(router);
	const stopBubble = (e) => {
		e.stopPropagation();
	};
	const d = format(new Date(data.date.toDate()), "do MMMM, Y") || "";

	const handleDelete = async (e) => {
		e.preventDefault();
		router.push("/profile");
		await FirestoreService.removeDoc(user.uid, data.docId);
		setOpenModal(false);
	};

	return (
		<Wrapper onClick={() => setOpenModal(false)} name="wrapper">
			<Modal onClick={stopBubble}>
				<Title>Delete</Title>

				<p>Are you sure you want to delete the following?</p>
				<ul>
					<li>
						<strong>Workout:</strong> {data.workout || ""}
					</li>
					<li>
						<strong>Level:</strong> {data.level || ""}
					</li>
					<li>
						<strong>Date:</strong> {d || ""}
					</li>
				</ul>

				<ButtonContainer>
					<Button onClick={() => setOpenModal(false)} type="button">
						cancel
					</Button>
					<Button onClick={handleDelete} type="button">
						delete
					</Button>
				</ButtonContainer>
			</Modal>
		</Wrapper>
	);
};

export default DeleteModal;
