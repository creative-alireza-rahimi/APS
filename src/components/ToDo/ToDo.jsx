import { useState, useRef, useEffect } from "react";
import { ToDoPage, ToDoList, ToDoInput, ToDoAction, Button, Description, FormButtons, CancelButton, Title, ToDoItems, ToDoItemsStyle, FontAwesomeIconStyle } from "./ToDo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { getToDo, createToDo, deleteToDo, updateToDo } from "../../services/services"
import { Message } from "../Message";


export const ToDo = () => {
    const ref = useRef(null);

    const [isUpdate, setIsUpdate] = useState(false);
    const [update, setUpdate] = useState({});
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        getToDo().then(data => {
            setTodos(data)
        })
    }, [])

    function submitOnEnter(e) {
        if (e.key === "Enter" && !isUpdate) handleSubmit();
        else if (e.key === "Enter" && isUpdate) handleUpdate();
    }

    async function handleSubmit() {
        if (ref.current.value) {
            setIsUpdate(false)
            setTodos(await createToDo(ref.current.value))
            ref.current.value = "";
        } else setMessage(true)
    }

    async function handleDelete(id) {
        setTodos(await deleteToDo(id))
    }

    async function handleUpdate() {
        setTodos(await updateToDo({ ...update, title: ref.current.value }))
        setIsUpdate(false)
        ref.current.value = ""
        ref.current.blur();

    }

    async function handleEdit(todoTitle, id) {
        setIsUpdate(true)
        ref.current.focus();
        ref.current.value = todoTitle;
        setUpdate({ id })
    }

    function handleCancelEdit() {
        ref.current.value = "";
        ref.current.blur();
        setIsUpdate(false)
    }


    function handleMessage(isMessage) {
        setMessage(isMessage);
    }

    return (
        <>
            <ToDoPage>
                {!message ?
                    <>
                        <ToDoAction>
                            <Description>
                                <Title>Title: </Title>
                                <ToDoInput ref={ref} type={'text'} placeholder=" add your to do" onKeyUp={(e) => submitOnEnter(e)} />
                            </Description>
                            <FormButtons>
                                <Button onClick={() => isUpdate ? handleUpdate() : handleSubmit()}>
                                    {isUpdate ? "edit" : "add"}
                                </Button>
                                {isUpdate ? <CancelButton onClick={() => handleCancelEdit()}>cancel</CancelButton> : ""}
                            </FormButtons>
                        </ToDoAction>

                        <ToDoList>
                            {todos?.map((toDo, i) => {
                                return (
                                    <ToDoItemsStyle key={toDo._id}>
                                        <ToDoItems>{`${i + 1}`.padStart(2, '0')}- {toDo.title}</ToDoItems>
                                        <FontAwesomeIconStyle>
                                            <FontAwesomeIcon icon={faPenToSquare} color="blue" onClick={(e) => handleEdit(toDo.title, toDo._id)} />
                                            <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleDelete(toDo._id)} />
                                        </FontAwesomeIconStyle>
                                    </ToDoItemsStyle>)
                            })}
                        </ToDoList>
                    </> : <Message handleMessage={handleMessage} />}

            </ToDoPage>
        </>
    );
}