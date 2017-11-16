(function () {

    class Set<T>{

        private _set: Array<T> = [];

        public get set(): Array<T> {
            return this._set;
        }

        public add(value: T) {
            if (!this.contains(value)) {
                this._set.push(value);
            }
        }

        public contains(value: T): boolean {
            let exists = false;

            this._set.some((oldValue) => {
                if (value === oldValue) {
                    exists = true;
                    return true;
                }

                return false;
            });

            return exists;
        }
    }

    console.log('----set números----');

    let setNumbers = new Set<number>();
    setNumbers.add(1);
    setNumbers.add(2);
    setNumbers.add(1);
    console.log(setNumbers.set);

    console.log('----set strings----');

    let setStrings = new Set<string>();
    setStrings.add("felipe");
    setStrings.add("claudia");
    setStrings.add("felipe");
    console.log(setStrings.set);

})();