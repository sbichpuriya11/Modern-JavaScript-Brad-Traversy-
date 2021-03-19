const User = function(name){
    this.name = name
    this.chatroom = null
}

User.prototype = {
    send:function(message,to){
        this.chatroom.send(message, this,to)
    },

    recieve:function(message,from){
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function(){
    let users={} //list of users

    return {
        register:function(user){
            users[user.name] = user;
            user.chatroom = this
        },

        send:function(message,from,to){
            if(to){
                // Single user message
                to.recieve(message,from)
            }else{
                // Mass message broadcast
                for(key in users){
                    if(users[key]!== from){
                        users[key].recieve(message,from)
                    }
                }
            }
        }
    }
}

const brad = new User('Brad')
const jeff = new User('Jeff')
const john = new User('John')
const lisa = new User('Lisa')
const christ = new User('Christ')

const chatroom = new Chatroom()

chatroom.register(brad)
chatroom.register(jeff)
chatroom.register(john)
chatroom.register(lisa)
chatroom.register(christ)


brad.send('Hello Jeff',jeff)
john.send('Goodbye lisa',lisa)

christ.send('Hello Everyone!!!')