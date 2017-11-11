(function () {
    class User {

        public name: string;
        private _age: number;
        public get age(): number {
            return this._age;
        }
        public set age(v: number) {
            this._age = v;
        }

        private _id: number;
        public get id(): number {
            return this._id;
        }

        private users: Array<User> = [];

        public addUser(user: User): number {
            let Id: number = this.users.length + 1;
            user._id = Id;
            this.users.push(user);
            return Id;
        }

        public removeUser(id: number): void {
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
})();