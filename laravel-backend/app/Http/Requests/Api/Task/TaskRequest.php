<?php

namespace App\Http\Requests\Api\Task;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'id'=> 'required|integer',
            'user_id' => 'required|integer',
            'name' => 'required'
        ];


        switch ($this->getMethod())
        {
            case 'POST':
            return $rules;
            case 'PUT':
            return [
                'id' => 'required|integer', //должен существовать. Можно вот так: unique:games,id,' . $this->route('game'),
                'name' => [
                'required',
                Rule::unique('task')->ignore($this->name, 'name') //должен быть уникальным, за исключением себя же
                ]
            ] + $rules; // и берем все остальные правила
            // case 'PATCH':
            case 'DELETE':
            return [
                'id' => 'required|integer'
            ];
        }
    }
}
