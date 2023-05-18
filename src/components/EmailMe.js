export function sendEmail(children) {

    const name= children.name;
    const email= children.email;
    const inquery= children.inquery;
    const message= children.message;
    const ready= !!name && !!email && !!inquery && message.length>8

    return (
        ready?
            <a
            target="_blank"
            href={'mailto:osharpe001@gmail.com?subject='+name+' is interested in sharing a '+inquery+' with you.&body='+message+"... \n"+name+"'s email is "+email+'.'}
            >
                Send Email
            </a>
        :
            <p>Please Fill Out Form</p>
    )
}