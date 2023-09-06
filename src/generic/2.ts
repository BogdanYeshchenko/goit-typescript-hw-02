/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}
function compare<T1 extends Partial<AllType>, T2 extends Partial<AllType>>(
  top: Pick<AllType, Extract<keyof T1, keyof AllType>>,
  bottom: Pick<AllType, Extract<keyof T2, keyof AllType>>
): AllType {
  return {
    name: top.name || '',
    color: top.color || '',
    position: bottom.position || 0,
    weight: bottom.weight || 0,
  };
}

export {};