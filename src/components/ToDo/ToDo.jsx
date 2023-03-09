import { useState, useRef, useEffect } from "react";
import { ToDoPage, ToDoList, ToDoInput, ToDoAction, Button, Title, ToDoItems, ToDoItemsStyle, FontAwesomeIconStyle } from "./ToDo.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { getToDo, createToDo, deleteToDo, updateToDo } from "../../services/services"

export const ToDo = () => {
    const ref = useRef(null);

    const [isUpdate, setIsUpdate] = useState(false);
    const [update, setUpdate] = useState({});
    const [todos, setDotos] = useState([]);

    useEffect(() => {
        getToDo().then(data => {
            setDotos(data)
        })
    }, [])

    function submitOnEnter(e) {
        if (e.key === "Enter" && !isUpdate) handleSubmit();
        else if (e.key === "Enter" && isUpdate) handleUpdate();
    }

    async function handleSubmit() {
        setIsUpdate(false)
        setDotos(await createToDo(ref.current.value))
        ref.current.value = "";
    }

    async function handleDelete(id) {
        setDotos(await deleteToDo(id))
    }

    async function handleUpdate() {
        setDotos(await updateToDo({ ...update, title: ref.current.value }))
        setIsUpdate(false)
        ref.current.value = ""
    }

    async function handleEdit(todoTitle, id) {
        setIsUpdate(true)
        ref.current.focus();
        ref.current.value = todoTitle;
        setUpdate({ id })
    }

    return (
        <>
            <ToDoPage>
                <ToDoAction>
                    <Title>Title: </Title>
                    <ToDoInput ref={ref} type={'text'} placeholder=" add your to do" onKeyUp={(e) => submitOnEnter(e)} />
                    <Button onClick={() => isUpdate ? handleUpdate() : handleSubmit()}>
                        {isUpdate ? "edit" : "add"}
                    </Button>
                </ToDoAction>

                <ToDoList>
                    {todos?.map((toDo, i) => {
                        return (
                            <ToDoItemsStyle key={toDo._id}>
                                <ToDoItems>{`${i + 1}`.padStart(2, '0')}- {toDo.title}</ToDoItems>
                                <FontAwesomeIconStyle>
                                    <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleDelete(toDo._id)} />
                                    <FontAwesomeIcon icon={faPenToSquare} color="blue" onClick={(e) => handleEdit(toDo.title, toDo._id)} />
                                </FontAwesomeIconStyle>
                            </ToDoItemsStyle>)
                    })}
                </ToDoList>
            </ToDoPage>
        </>
    );
}