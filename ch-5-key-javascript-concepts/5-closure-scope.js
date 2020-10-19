function outerFn () {
    var foo = true
    function print() { console.log(foo) }
    print() // prints true
    foo = false
    print() // prints false
}

outerFn()

function outerFn2 () {
    var foo = true
    function print(foo) { console.log(foo) }
    print(1) // prints 1
    foo = false
    print(2) // prints 2
}

outerFn2()

function init (type) {
    var id = 0
    return (name) => {
      id += 1
      return { id: id, type: type, name: name }
    }
}
const createUser = init('user')
const createBook = init('book')
const dave = createUser('Dave')
const annie = createUser('Annie')
const ncb = createBook('Node Cookbook')
console.log(dave) //prints {id: 1, type: 'user', name: 'Dave'}
console.log(annie) //prints {id: 2, type: 'user', name: 'Annie'}
console.log(ncb) //prints {id: 1, type: 'book', name: 'Node Cookbook'}

function createKeypair(secret) {
    return { 
        id: 'secrectKey', 
        privateKey: `${secret}: ll!dfh894O0sfggfjk45Nh2jgklsj34O92jfl45`,
        publicKey: 'dfh8945-ggfjk45-jgklsj34-jfl45',
    }
}

function cryptoSign(content, privateKey) {
    return `ssh-rsa::${privateKey} JJAJAJJJDKGD09nuUGHUBBBBhhjsdskds78897asdHHHHH ${content}@test.com`
}

function createSigner (secret) {
    const keypair = createKeypair(secret)
    return function (content) {
       return {
          signed: cryptoSign(content, keypair.privateKey),
          publicKey: keypair.publicKey
       }
    }
}
const sign = createSigner('super secret thing')
const signedContent = sign('sign me')
const moreSignedContent = sign('sign me as well')
console.log(sign)
console.log(signedContent)
console.log(moreSignedContent)

function wolf (name) {
    const howl = () => {
      console.log(name + ': awoooooooo')
    }
    return { howl: howl }
}

function dog (name) {
    name = name + ' the dog'
    const woof = () => { console.log(name + ': woof') }
    return {
        ...wolf(name),
        woof: woof
    }
}
const rufus = dog('Rufus')

rufus.woof() // prints "Rufus the dog: woof"
rufus.howl() // prints "Rufus the dog: awoooooooo"