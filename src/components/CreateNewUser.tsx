import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions.ts";
import { useState } from "react";

export function CreateNewUser(){
    const { addUser } = useUserActions();
    const [result, setResult] = useState<'ok' | 'error' | null>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        setResult(null);

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const github = formData.get('github') as string;

        if(!name || !email || !github){
            setResult('error');
            return;
        }

        addUser({ name, email, github });
        setResult('ok');
        form.reset();
    }

    return (
        <Card className="mt-16">
            <Title>Create New User</Title>

            <form onSubmit={handleSubmit} className="">
                <TextInput 
                    name="name"
                    placeholder="Input your name"
                />
                <TextInput 
                    name="email"
                    placeholder="Input your email"
                />
                <TextInput 
                    name="github"
                    placeholder="Input your github username"
                />

                <div>
                    <Button
                        type="submit"
                        className="mt-16 bg-color-red-500 hover:bg-color-red-600"
                    >
                        Crear Usuario
                    </Button>
                    <span>
                        { result === 'ok' && <Badge className="bg-color-green-500">User created successfully</Badge> }
                        { result === 'error' && <Badge className="bg-color-red-500">Error creating user</Badge> }
                    </span>
                </div>
            </form>
        </Card>
    );
}