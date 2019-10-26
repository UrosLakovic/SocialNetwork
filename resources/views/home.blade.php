@extends('layouts.app')

@section('content')

<script>
    window.currentUser = JSON.parse('{!! json_encode(\Auth()->user()) !!}')
</script>

<div id="app"></div>
@endsection
