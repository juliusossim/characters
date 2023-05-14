type FilterByParamsProps = {
    arr: [{
        [key: string]: string | any
    }];
    param: string;
    value: string;
}
export const filterByParam = ({arr, param, value}: FilterByParamsProps) => 
arr.filter((item) => item[param] === value);