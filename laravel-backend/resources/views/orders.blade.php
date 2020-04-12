@extends('layouts.app')

@section('content')


@foreach ($orders as $order)
    <p>Order {{ $order->name }}</p>
@endforeach


@endsection;