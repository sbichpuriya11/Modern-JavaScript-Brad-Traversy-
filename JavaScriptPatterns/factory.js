// Factory Method
function MemberFactory(){
    this.createMember = function(name,type){
        let member;
        this.name = name;
        if(type==='simple'){
            member = new SimpleMembership(name)
        }else if(type==='standard'){
            member = new StandardMembership(name)
        }else if(type==='super'){   
            member = new SuperMembership(name)
        }
        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }

        return member;
    }
}

const SimpleMembership = function(name){
    this.name = name
    this.cost = '100$'
}

const StandardMembership = function(name){
    this.name = name
    this.cost = '130$'
}

const SuperMembership = function(name){
    this.name = name
    this.cost = '210$'
}


const members = []
const factory = new MemberFactory()


members.push(factory.createMember('Brad Traversy','simple'))
members.push(factory.createMember('chris Jackson','super'))
members.push(factory.createMember('Tom Smith','simple'))
members.push(factory.createMember('Janice Williams','standard'))

console.log(members)

members.forEach((member)=>{
    member.define()
})