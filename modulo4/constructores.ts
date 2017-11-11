(function () {
    class User {

        constructor(public name: string, public age?: number) {

        }

        private _id: number;
        public get id(): number {
            return this._id;
        }

        private static users: Array<User> = [];

        public static addUser(user: User): number {
            let Id: number = this.users.length + 1;
            user._id = Id;
            this.users.push(user);
            return Id;
        }

        public static removeUser(id: number): void {
            let userIndex = -1;
            this.users.forEach((value: User, index) => {
                if (value.id === id) {
                    userIndex = index;
                }
            });

            if (userIndex > -1) {
                this.users.splice(userIndex, 1);
            }
        }

    }

    let user1: User = new User("Felipe", 999);
    let user2: User = new User("Felipe");
    user2.age = 46;
    User.addUser(user1);

})();
